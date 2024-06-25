const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { error } = require('console');
const cors = require('cors');
const pool = require('./sql/db');
const app = express();
const comparisionController = require('./controllers/comparisionController');
const stock_heat_controller = require('./controllers/stock_heat_controller');
const month_week_controller = require('./controllers/month_week_controller');
const blog_controller = require('./controllers/blog_controller');
const coupon_controller = require('./controllers/coupon_code_controller');

const stockRoutes = require("./routes/stockRoutes");
const heatMaproutes = require("./routes/heatMapRoutes");
const usersRoutes = require("./routes/usersRoutes");
const blogRoutes = require("./routes/blogRoutes");
const couponCodeRoutes = require('./routes/couponCodeRoutes');

const PORT = process.env.PORT || 8888;

// multer config
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/")
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = { credentials: true, origin: "*" };
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/", (req, res) => {
    res.send("Hello this is the stock API.");
});

// Routes
app.use(stockRoutes);
app.use(heatMaproutes);
app.use(usersRoutes);
app.use(blogRoutes);
app.use(couponCodeRoutes);

app.get("*", function (req, res) {
    res.status(404).render("errors/404");
});

// Blog POST request
// app.post('/upload-blog', upload.single('file'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }
//     console.log('File uploaded', req.file);
//     const content = req.body.content;
//     const title = req.body.title;
//     console.log(content);
//     console.log(title);
//     console.log(req.file.fieldname);
//     blog_controller.uploadBlogData(req.file, content, title).then(result => {
//         console.log('Blog data uploaded successfully:', result);
//         res.status(200).send('Blog data uploaded successfully.');
//     })
//         .catch(error => {
//             console.error('Error uploading blog data:', error);
//             res.status(500).send('Error uploading blog data.');
//         });
// });

// Coupon code POST request
app.post('/handle-couponcode', (req, res) => {
    const status = req.body.status;
    coupon_controller.toggleCouponActivation(status)
        .then(results => {
            res.status(200).json({ success: true, message: `Coupon code activation status updated successfully. ${status}` });
        })
        .catch(error => {
            console.error('Error handling coupon code:', error);
            res.status(500).json({ success: false, message: 'Failed to update coupon code activation status.' });
        });
});

// Broad POST request
app.post('/upload-broad', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    comparisionController.uploadBroad(__dirname + "/uploads/" + req.file.filename, req.file.originalname, (error) => {
        if (error) {
            return res.status(5000).json({ error: 'Error uploading CSV file' });
        }
        res.json({ message: 'File uploaded successfully' });
    });
});

// Strategy POST request
app.post('/upload-strategy', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    comparisionController.uploadStrategy(__dirname + "/uploads/" + req.file.filename, req.file.originalname, (error) => {
        if (error) {
            return res.status(5000).json({ error: 'Error uploading CSV file' });
        }
        res.json({ message: 'File uploaded successfully' });
    });
});

// Thematic POST request
app.post('/upload-thematic', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    comparisionController.uploadThematic(__dirname + "/uploads/" + req.file.filename, req.file.originalname, (error) => {
        if (error) {
            return res.status(5000).json({ error: 'Error uploading CSV file' });
        }
        res.json({ message: 'File uploaded successfully' });
    });
});

// Sector POST request
app.post('/upload-sector', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    comparisionController.uploadSector(__dirname + "/uploads/" + req.file.filename, req.file.originalname, (error) => {
        if (error) {
            return res.status(5000).json({ error: 'Error uploading CSV file' });
        }
        res.json({ message: 'File uploaded successfully' });
    });
});

// All indices (stock & heat) data POST request
app.post('/upload-stock&heat-data', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    stock_heat_controller.uploadAllData(__dirname + "/uploads/" + req.file.filename, req.file.originalname, (error) => {
        if (error) {
            return res.status(5000).json({ error: 'Error uploading CSV file' });
        }
        res.json({ message: 'File uploaded successfully' });
    });
});

// Prev-month and current-week POST request
app.post('/upload-month-week', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    month_week_controller.uploadMonthAndWeek(__dirname + "/uploads/" + req.file.filename, req.file.originalname, (error) => {
        if (error) {
            return res.status(5000).json({ error: 'Error uploading CSV file' });
        }
        res.json({ message: 'File uploaded successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
