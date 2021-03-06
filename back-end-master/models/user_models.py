from pydantic import BaseModel

class UserIn(BaseModel):
    username    : str
    password    : str

class UserOut(BaseModel):
    username    : str
    contact     : str

    class Config:
        orm_mode = True
