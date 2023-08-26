const setHeaders = (res) => {
  res.set({
    "Content-Type": "application/json",
  });
};
export default {
  success: (res, message, data) => {
    setHeaders(res);
    res.status(200).json({ error: false, message, data });
  },
  badRequest: (res, message, data) => {
    setHeaders(res);
    res.status(400).json({ error: true, message, data });
  },
  notFound: (res, message, data) => {
    setHeaders(res);
    res.status(404).json({ error: true, message, data });
  },
  internalServerError: (res, message, data) => {
    setHeaders(res);
    res.status(500).json({ error: true, message, data });
  },
  unAuthorized: (res, message, data) => {
    setHeaders(res);
    res.status(401).json({ error: true, message, data });
  },
};
