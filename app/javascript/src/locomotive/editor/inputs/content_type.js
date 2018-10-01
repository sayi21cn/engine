import React from 'react';

const ContentTypeInput = ({ label, setting, getValue, handleChange, urls }) => (
  <div className="editor-input editor-input-content-type">
    <label className="editor-input--label">
      {label || setting.label}
    </label>
    <a href={urls['contentEntries'][setting.id]} className="btn btn-default btn-sm editor-input--action">
      Voir
    </a>
  </div>
)

export default ContentTypeInput;
