const TokenGenerator = require('uuid-token-generator');

export const generateToken = () => {
    const token = new TokenGenerator()
    return token.generate()
}