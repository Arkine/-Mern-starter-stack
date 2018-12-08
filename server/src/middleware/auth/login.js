const express = require('express');


module.exports = (req, res) => {
    console.log({req, res});
    
    return res.json({
        success: true
    });
}