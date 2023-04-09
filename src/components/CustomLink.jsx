import React from 'react';

const CustomLink = ({ href, children }) => ((href && <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>) || children);

export default CustomLink;