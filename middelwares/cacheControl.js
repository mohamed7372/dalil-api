const cacheControl = (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store");
    res.setHeader("Expires", "0");
    res.setHeader("Pragma", "no-cache");
    next();
  };
  
  export default cacheControl;