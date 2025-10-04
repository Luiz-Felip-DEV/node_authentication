import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ 
        error: 'Token não fornecido' 
      });
    }

    const parts = authHeader.split(' ');
    
    if (parts.length !== 2) {
      return res.status(401).json({ 
        error: 'Token mal formatado' 
      });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ 
        error: 'Token mal formatado' 
      });
    }

    jwt.verify(
      token, 
      process.env.JWT_SECRET || 'seu_secret_key_aqui', 
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ 
            error: 'Token inválido ou expirado' 
          });
        }

        req.userId = decoded.id;
        return next();
      }
    );

  } catch (error) {
    return res.status(401).json({ 
      error: 'Erro ao validar token',
      details: error.message 
    });
  }
};
