import React from 'react'
// import PropTypes from 'prop-types';

type HeadProps = {
	title: string
	isActive?: boolean
}

export const Head = ({ title = 'Hello World', isActive = true }: HeadProps) => (
	<div>{isActive && <h1>{title}</h1>}</div>
)

// Head.defaultProps = {
//   title: "Hello",
//   isActive: true
// }

// Head.propTypes = {
//   title: PropTypes.string,
//   isActive: PropTypes.bool
// }
