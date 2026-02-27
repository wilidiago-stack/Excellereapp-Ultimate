
# Excellereapp Ultimate

Este proyecto es un centro de inteligencia multi-proyecto y visualización de drones corporativos, impulsado por IA y construido con NextJS, React, Tailwind CSS y Firebase.

## Características principales

- **Gestor de Medios**: Control centralizado de banners, logos y fondos del sistema.
- **Visualización Geoespacial**: Mapas interactivos con telemetría de drones.
- **Métricas Estratégicas**: Análisis en tiempo real de operaciones aéreas.
- **Asistente de Voz IA**: Navegación y ayuda contextual mediante Google Gemini.
- **Gestión de Documentos**: Repositorio seguro para planos y registros de vuelo.

## Solución de problemas con GitHub

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

### 3. Error: "failed to push some refs"
Este error ocurre porque el repositorio en GitHub tiene cambios que tú no tienes localmente (ej: un README creado en la web).
**Si es tu primer commit y quieres sobrescribir lo que hay en GitHub:**
```bash
git push -u origin main --force
```
**Si quieres conservar ambos (RECOMENDADO):**
```bash
git pull origin main --rebase
git push -u origin main
```

### Flujo recomendado para subir el código:
```bash
git init
git add .
git commit -m "Initial commit: Excellereapp Ultimate"
git remote add origin https://github.com/wilidiago-stack/Excellereapp-Ultimate.git
git branch -M main
# Usa el comando con --force solo si es la primera vez y quieres limpiar el repo remoto
git push -u origin main --force
```

### Autenticación
GitHub requiere un **Personal Access Token (PAT)** en lugar de tu contraseña normal. 
1. Ve a GitHub -> Settings -> Developer Settings -> Personal Access Tokens (classic).
2. Genera uno con permisos `repo`.
3. Úsalo como contraseña cuando Git te la pida.

## Desarrollo

1. Instala las dependencias.
2. Configura tus variables de entorno en `.env`.
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
