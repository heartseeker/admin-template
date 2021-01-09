(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = [];
    v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
    for (w = 0, x = v.length; w < x; ++w)
      (function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? "unshift" : "push"](
              [m].concat([].slice.call(arguments, 0))
            );
          };
      })(v[w]);
    y = e.createElement(n);
    y.async = !0;
    y.src = "https://cdn.pendo.io/agent/static/" + apiKey + "/pendo.js";
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, "script", "pendo");

  // Call this whenever information about your visitors becomes available
  // Please use Strings, Numbers, or Bools for value types.
  pendo.initialize({
    visitor: {
      id: "1", // Required if user is logged in
      full_name: "Alex Amistad",
      email: "alexinformationtecv@gmail.com"
      // email:        // Recommended if using Pendo Feedback, or NPS Email
      // full_name:    // Recommended if using Pendo Feedback
      // role:         // Optional

      // You can add any additional visitor level key-values here,
      // as long as it's not one of the above reserved names.
    },

    account: {
      id: "1a-b2-cd-23-ef", // Highly recommended
      // name:         // Optional
      // is_paying:    // Recommended if using Pendo Feedback
      // monthly_value:// Recommended if using Pendo Feedback
      // planLevel:    // Optional
      // planPrice:    // Optional
      // creationDate: // Optional

      // You can add any additional account level key-values here,
      // as long as it's not one of the above reserved names.
    },
  });
})("972f11ee-e16f-402f-650c-d715101c5e52");
