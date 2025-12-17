# Instrucciones de Configuración

## Error: "Cannot find module '@angular/core'"

Este error es **normal y esperado** cuando las dependencias de Node.js no están instaladas.

## Solución

1. **Asegúrate de tener Node.js instalado** (versión 18 o superior recomendada)
   - Descarga desde: https://nodejs.org/

2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Una vez instaladas las dependencias, el error desaparecerá automáticamente.**

## Verificación

Después de ejecutar `npm install`, deberías ver:
- Una carpeta `node_modules/` creada en la raíz del proyecto
- Los errores de TypeScript desaparecerán en el IDE

## Ejecutar el proyecto

Una vez instaladas las dependencias:
```bash
npm start
```

El proyecto estará disponible en: http://localhost:4200


