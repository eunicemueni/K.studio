# This is a minimal example - adapt to your exact model
from diffusers import DiffusionPipeline
import torch
from google.cloud import storage
from moviepy.editor import ImageSequenceClip
import firestore_admin  # pseudo import - use firebase admin or google-cloud-firestore

MODEL = "runwayml/stable-diffusion-v1-5"  # replace with appropriate text2video model

def generate_frames(prompt, frames=30):
    pipe = DiffusionPipeline.from_pretrained(MODEL, torch_dtype=torch.float16)
    pipe = pipe.to("cuda")
    out = pipe(prompt, num_inference_steps=30)  # adjust to actual pipeline
    # This is simplified — you'll need a real text-to-video pipeline, returning images
    return out.images  # list of PIL images

def frames_to_video(frames, out_path):
    clip = ImageSequenceClip([np.asarray(f) for f in frames], fps=15)
    clip.write_videofile(out_path, codec="libx264")

def run_job(order_id, prompt):
    # fetch order -> generate frames -> upload to GCS or Drive -> update order.resultUrl
    frames = generate_frames(prompt)
    out_path = f"/tmp/{order_id}.mp4"
    frames_to_video(frames, out_path)
    # Upload to Google Drive or Firebase Storage (use google-cloud-storage)
    # Update Firestore order status to completed and set resultUrl
