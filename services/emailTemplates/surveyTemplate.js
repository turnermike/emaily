// services/emailTemplates/surveyTemplate.js

// HTML Email Template

const keys = require('../../config/keys');

module.exports = (survey) => {

  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
<<<<<<< HEAD
            <a href="${keys.redirectDomain}/api/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/thanks">No</a>
=======
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
>>>>>>> db-move-atlas
          </div>
        </div>
      </body>
    </html>
  `;

};