import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-71c1c944/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact Form Endpoint
// Contact Form Endpoint
app.post("/make-server-71c1c944/contact", async (c) => {
  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const key = `contact_${id}`;
    const timestamp = new Date().toISOString();
    
    // Guardar en KV (igual que antes)
    await kv.set(key, { ...body, id, timestamp });

    // Enviar a n8n
    await fetch("https://trabajoncc.app.n8n.cloud/webhook/cotizacion-ncc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: body.fullName,
        phone: body.phone,
        email: body.email,
        service: body.service,
        projectDetails: body.projectDetails,
        folio: id,
        timestamp,
      }),
    });
    
    return c.json({ success: true, message: "Contact saved successfully", id });
  } catch (error) {
    console.error("Error saving contact:", error);
    return c.json({ success: false, error: "Failed to save contact" }, 500);
  }
});

// Projects Endpoints
app.get("/make-server-71c1c944/projects", async (c) => {
  try {
    const projects = await kv.getByPrefix("project_");
    return c.json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return c.json({ success: false, error: "Failed to fetch projects" }, 500);
  }
});

app.post("/make-server-71c1c944/projects", async (c) => {
  try {
    const body = await c.req.json();
    const id = body.id || crypto.randomUUID();
    const key = `project_${id}`;
    
    await kv.set(key, { ...body, id });
    
    return c.json({ success: true, message: "Project saved successfully", id });
  } catch (error) {
    console.error("Error saving project:", error);
    return c.json({ success: false, error: "Failed to save project" }, 500);
  }
});

Deno.serve(app.fetch);
