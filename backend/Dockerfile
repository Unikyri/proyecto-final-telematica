# Usa la imagen oficial de .NET SDK para build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copia el archivo de proyecto y restaura las dependencias
COPY *.csproj ./
RUN dotnet restore

# Copia el resto de los archivos y construye la aplicación
COPY . ./
RUN dotnet publish -c Release -o out

# Usa la imagen runtime para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copia los archivos compilados desde la etapa de build
COPY --from=build /app/out .

# Expone el puerto en el que la aplicación va a ejecutarse
EXPOSE 80

# Define el comando de inicio
ENTRYPOINT ["dotnet", "BackendAPI.dll"] 