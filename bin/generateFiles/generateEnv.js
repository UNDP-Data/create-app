export function generateEnv() {
  return `# Secret key used by Better Auth for signing tokens and securing sessions
BETTER_AUTH_SECRET=

# The base URL where your Better Auth instance is running (e.g., localhost for dev)
BETTER_AUTH_URL=http://localhost:3000

# --- GitHub OAuth credentials ---
# Client ID from your GitHub OAuth app (used for GitHub login)
GITHUB_CLIENT_ID=
# Client Secret from your GitHub OAuth app
GITHUB_CLIENT_SECRET=

# --- Azure AD OAuth credentials ---
# Client ID from your Azure AD App Registration
AZURE_CLIENT_ID=
# Client Secret generated for your Azure AD App
AZURE_CLIENT_SECRET=
# Tenant ID of your Azure AD directory (found in Azure portal)
AZURE_TENANT_ID=`
}