import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "b4thdx17",
    dataset: "production",
    title: "Ecommerce",
    apiVersion: "2023-05-25",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});


export default config;