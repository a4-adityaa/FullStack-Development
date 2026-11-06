import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { searchForWorkspaceRoot } from 'vite'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const workspaceRoot = fileURLToPath(new URL('../', import.meta.url))
const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url))

export default defineConfig({
  root: projectRoot,
  server: {
    fs: {
      strict: false,
      allow: [projectRoot, workspaceRoot, repositoryRoot, searchForWorkspaceRoot(projectRoot)]
    }
  }
})
