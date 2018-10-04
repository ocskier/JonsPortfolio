// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app,smtpTransport,user_email) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/send", function (req, res) {
    var mailOptions = {
      name: req.query.name,
      to: user_email,
      text:  "From: " + req.query.from + "\n" + req.query.textbody
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.end("error");
      } else {
        console.log("Message sent: " + response.message);
        res.end("sent");
      }
    });

  });

};
