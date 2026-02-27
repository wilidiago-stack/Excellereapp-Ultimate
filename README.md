
# Excellereapp Ultimate

Este proyecto es un centro de inteligencia multi-proyecto y visualización de drones corporativos, impulsado por IA y construido con NextJS, React, Tailwind CSS y Firebase.

## Características principales

- **Gestor de Medios**: Control centralizado de banners, logos y fondos del sistema.
- **Visualización Geoespacial**: Mapas interactivos con telemetría de drones.
- **Métricas Estratégicas**: Análisis en tiempo real de operaciones aéreas.
- **Asistente de Voz IA**: Navegación y ayuda contextual mediante Google Gemini.
- **Gestión de Documentos**: Repositorio seguro para planos y registros de vuelo.

## Conexión a GitHub

Si recibes errores al configurar tu repositorio, sigue estas instrucciones:

### 1. Error: "remote origin already exists"
Si intentas añadir el remoto y ya existe, actualízalo:
```bash
git remote set-url origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
```

### 2. Error: "No such remote 'origin'"
Si intentas borrar o empujar y te dice que no existe, simplemente añádelo por primera vez:
```bash
git remote add origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
```

### Pasos recomendados para subir el código (Flujo completo):
```bash
git init
git add .
git commit -m "Initial commit: Excellereapp Ultimate"
# Si falla el siguiente comando, usa 'git remote set-url origin ...'
git remote add origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
git branch -M main
git push -u origin main
```

### Autenticación
Si Git te pide contraseña y falla, recuerda que GitHub ahora requiere un **Personal Access Token (PAT)**. Créalo en tu configuración de GitHub -> Developer Settings -> Personal Access Tokens.

## Desarrollo

1. Instala las dependencias.
2. Configura tus variables de entorno en `.env`.
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
