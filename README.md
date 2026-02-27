
# Excellereapp Ultimate

Este proyecto es un centro de inteligencia multi-proyecto y visualización de drones corporativos, impulsado por IA y construido con NextJS, React, Tailwind CSS y Firebase.

## Características principales

- **Gestor de Medios**: Control centralizado de banners, logos y fondos del sistema.
- **Visualización Geoespacial**: Mapas interactivos con telemetría de drones.
- **Métricas Estratégicas**: Análisis en tiempo real de operaciones aéreas.
- **Asistente de Voz IA**: Navegación y ayuda contextual mediante Google Gemini.
- **Gestión de Documentos**: Repositorio seguro para planos y registros de vuelo.

## Conexión a GitHub

Para sincronizar este proyecto con tu repositorio, ejecuta los siguientes comandos en tu terminal.

### Solución a errores de autenticación
Si obtienes un error de autenticación, asegúrate de estar usando un **Personal Access Token (PAT)** en lugar de tu contraseña de GitHub si usas HTTPS, o configura tus llaves **SSH**.

```bash
git init
git remote add origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
git branch -M main
git add .
git commit -m "Initial commit: Excellereapp Ultimate con Media Manager"
# Si te pide contraseña, ingresa tu GitHub Personal Access Token
git push -u origin main
```

## Desarrollo

1. Instala las dependencias.
2. Configura tus variables de entorno en `.env`.
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
