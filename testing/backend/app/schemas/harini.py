from pydantic import BaseModel


class HariniInfo(BaseModel):
    person_name: str
    person_message: str
    person_age: int
