const express = require('express');
const morgan = require('morgan');

const app = express();

//=========Middleware========

app.use(morgan("dev"));

// =====Routes=====:

//POST : Admin Registration
app.post('/api/v1/admins/register', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin has been registred'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//POST : Admin Login
app.post('/api/v1/admins/login', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin has been logged successfully'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//GET : all Aadmin
app.get('/api/v1/admins', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'All admins'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//GET : single Admin
app.get('/api/v1/admin/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Single admin'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//UPDATE : Admin
app.put('/api/v1/admin/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Update admin'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//DELETE : Admin
app.delete('/api/v1/admin/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Delete admin'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//ACTION : Admin Suspending teacher
app.put('/api/v1/admin/suspend/teacher/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin suspending teacher',
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//ACTION : Admin Unsuspending teacher
app.put('/api/v1/admin/unsuspend/teacher/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin unsuspending teacher',
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});


//ACTION : Admin Withdraw teacher
app.put('/api/v1/admin/withdraw/teacher/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data:'Admin withdraw teacher',
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//ACTION : Admin Unwithdraw teacher
app.put('/api/v1/admin/unwithdraw/teacher/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data:'Admin unwithdraw teacher',
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//ACTION : Admin Publish exam results of teacher
app.put('/api/v1/admin/publish/exam/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data:'Admin publish exam',
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});

//ACTION : Admin Unpublish exam results of teacher
app.put('/api/v1/admin/unpublish/exam/:id', (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data:'Admin Unpublish exam',
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        error: err.message,
                    });
                }
});


module.exports = app;