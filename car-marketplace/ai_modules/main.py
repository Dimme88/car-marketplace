from fastapi import FastAPI, Request
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    context: dict = {}

@app.get("/health")
def health():
    return {"status": "ok", "message": "AI module is running!"}

@app.post("/ai/chat")
def ai_chat(req: ChatRequest):
    # Stub: Replace with real AI logic
    return {"response": f"You said: {req.message}", "context": req.context} 