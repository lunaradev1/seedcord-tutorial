export const TOKENS =
  /\/\/.*|\/\*[\s\S]*?\*\/|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\.|[^`\\])*`|[A-Za-z_$][\w$]*/g
export const SEEDCORD_CLI_IMPORT = /^import\s+(?:(\w+)\s*,?\s*)?(?:\{([^}]*)\})?\s+from\s+'seedcord(?:\/[\w/-]+)?';?$/gm

// TODO: Write the gateway pages, this will be where this get uncommented and used to find the gateway tokens.
// export const SEEDCORD_GATEWAY_IMPORT =
//   /^import\s+(?:(\w+)\s*,?\s*)?(?:\{([^}]*)\})?\s+from\s+'@seedcord\/gateway(?:\/[\w/-]+)?';?$/gm
