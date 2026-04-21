from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import HariniInfo

app = FastAPI(title="Testing Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/harini/info", response_model=HariniInfo)
def get_harini_info() -> HariniInfo:
    return HariniInfo(
        person_name="Harini",
        person_message="I know am an idiot.",
        person_age=24,
    )
