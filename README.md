
# Excellereapp Ultimate

Este proyecto es un centro de inteligencia multi-proyecto y visualización de drones corporativos, impulsado por IA y construido con NextJS, React, Tailwind CSS y Firebase.

## Configuración de Despliegue (App Hosting)

Para que la Inteligencia Artificial funcione en producción, debes configurar el secreto de la API Key:

1. Ve a la [Consola de Google Cloud](https://console.cloud.google.com/).
2. Busca **Secret Manager**.
3. Crea un nuevo secreto llamado `GOOGLE_GENAI_API_KEY`.
4. Pega tu clave de API de Gemini como valor del secreto.
5. Asegúrate de que el backend de **App Hosting** tenga permiso para acceder a este secreto (se te preguntará durante la configuración en Firebase).

## Solución de problemas con GitHub

Si recibes errores al configurar tu repositorio, sigue estas instrucciones:

### 1. Error: "remote origin already exists"
Si ya existe, actualízalo o bórralo antes de añadir el nuevo:
```bash
git remote remove origin
git remote add origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
```

### 2. Error: "No such remote 'origin'"
Si te dice que no existe, simplemente añádelo por primera vez:
```bash
git remote add origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
```

### 3. Error: "failed to push some refs"
Ocurre si hay cambios en GitHub que no tienes localmente.
**Si es tu primer commit y quieres sobrescribir GitHub:**
```bash
git push -u origin main --force
```

## Desarrollo

1. Instala las dependencias.
2. Configura tu `.env` local con `GOOGLE_GENAI_API_KEY`.
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
