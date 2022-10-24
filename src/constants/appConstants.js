const APP_CONSTANTS = {
  /**
     Defines constant value for http method that will be used by http service.
   */
  HTTP: {
    METHOD: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      DELETE: "DELETE",
      PATCH: "PATCH",
    },
  },
  /**
    Defines constant value for route type that will be used by route handler for authentication.
  */
  ROUTE_TYPES: {
    PUBLIC: "publicRoute",
    AUTHENTICATED: "authenticatedRoute",
    UNAUTHENTICATED: "unauthenticatedRoute",
  },
};
export default APP_CONSTANTS;
