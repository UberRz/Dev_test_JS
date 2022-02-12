from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#Creando Motor y Conexion con la Base de Datos
# TODO: Con la ayuda de pgAdmin debes crear una base de datos
# y la BD debes crearle un esquema
# TODO: Debes cambiar con tu usuario y contraseña de PostgreSQL
# además del host, puerto y nombre de la base de datos que hayas definido
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:3232@localhost:5432/Testjala"
engine                  = create_engine(SQLALCHEMY_DATABASE_URL)

# SQLALCHEMY_DATABASE_URL = "postgresql://bukybbizgzzhux:963369b9027955c7702825223babed6958cb7163eee64c6cb1aa78d74788edac@ec2-34-200-181-5.compute-1.amazonaws.com:5432/d4vhnle2anng12"
# engine                  = create_engine(SQLALCHEMY_DATABASE_URL)

#Creacion de la Sesion
SessionLocal = sessionmaker(autocommit=False,
                            autoflush=False,
                            bind=engine)

# En get_db inyectamos la dependencia SessionLocal
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#Creando Base para la creacion de los modelos
Base = declarative_base()

# TODO: Reemplazar el nombre del esquema creado 
# en la base de datos
Base.metadata.schema = "prueba"
