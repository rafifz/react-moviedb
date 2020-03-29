import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid text-center footer">
                <p className="py-3">
                &copy;Copyright 2020 <a href="https://github.com/rafifz/">rafifz</a> | API from <a href="http://www.omdbapi.com/">http://www.omdbapi.com/</a>
                </p>
            </div>
        )
    }
}

export default Footer

