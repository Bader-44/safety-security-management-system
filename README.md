# Safety & Security Management System Enterprise

**A Professional Web Application for Safety, Security, HSE, HR, Assets, Operations, Compliance, Inspection, Contractor, Visitor, Incident, and Administration Management**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Web%20App-brightgreen.svg)
![Languages](https://img.shields.io/badge/Languages-Arabic%20%26%20English-orange.svg)

## 🌟 Features

### Core Modules
- ✅ **Dashboard** - 16 KPI cards, 10+ interactive charts
- ✅ **Incident Management** - Full incident tracking with root cause analysis
- ✅ **Near Miss Management** - Prevention-focused tracking
- ✅ **Violation Management** - Security violation documentation
- ✅ **Theft Case Management** - Theft investigation tracking
- ✅ **Security Logs** - Daily security observations
- ✅ **Patrol Logs** - Security patrol tracking
- ✅ **Shift Handover** - Shift management records
- ✅ **Visitor Management** - Complete visitor tracking
- ✅ **Access Control** - Access card management
- ✅ **Key Control** - Key register tracking
- ✅ **Lost & Found** - Item tracking
- ✅ **Safety Observations** - Safety incident observations
- ✅ **HSE Inspections** - Inspection tracking
- ✅ **JSA Management** - Job Safety Analysis
- ✅ **Toolbox Talks** - Training sessions management
- ✅ **Risk Assessment** - 5×5 Risk Matrix with auto-calculation
- ✅ **Fire Extinguisher Management** - Equipment tracking with alerts
- ✅ **First Aid Kit Inspection** - Kit management and inspection
- ✅ **Chemical Register** - Chemical inventory management
- ✅ **Permit to Work** - Work permit tracking
- ✅ **Employee Management** - Complete employee database
- ✅ **Attendance Management** - Check-in/out tracking
- ✅ **Leave Management** - Leave request processing
- ✅ **Salary Management** - Auto-calculated payroll
- ✅ **Contract Management** - Contract tracking with expiry alerts
- ✅ **Training Management** - Employee training records
- ✅ **Certificate Tracker** - OSHA, First Aid, Fire Warden, etc.
- ✅ **Vehicle Management** - Vehicle tracking and maintenance
- ✅ **Asset Management** - Asset inventory tracking
- ✅ **CCTV Management** - Camera tracking and maintenance
- ✅ **Emergency Management** - Drills, evacuation records
- ✅ **Report Center** - Generate reports for all modules
- ✅ **Export System** - Excel, PDF, Print for every module
- ✅ **Notification Center** - Automatic expiry alerts

### Technical Features
- 🔐 **Role-Based Access Control** - 9 roles with granular permissions
- 🌍 **Bilingual Support** - Arabic RTL & English LTR with one-click switch
- 🎨 **Dark & Light Mode** - Theme toggle with persistent storage
- 📱 **Mobile Responsive** - Bootstrap 5 responsive design
- 💾 **Local Storage Database** - Client-side data persistence
- 📊 **Interactive Charts** - Chart.js integration
- 📋 **Data Tables** - DataTables with search, filter, pagination
- 📤 **Export Functionality** - Excel, PDF, Print for all modules
- 🔔 **Notification System** - Automatic alerts for expirations
- 🔐 **Authentication** - Secure login system with roles
- 🌐 **PWA Ready** - Offline support and installable
- 🚀 **SPA Architecture** - Single Page Application
- 🎯 **Search & Filters** - Global search across entire system
- 💾 **Backup & Restore** - Database export/import functionality

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework**: Bootstrap 5
- **Charts**: Chart.js
- **Tables**: DataTables
- **Export**: SheetJS (Excel), jsPDF (PDF)
- **Icons**: Font Awesome
- **Database**: LocalStorage
- **Design**: Responsive, Mobile-First

## 📋 User Roles & Permissions

1. **Admin** - Full system access
2. **Manager** - Management level access
3. **HSE Manager** - HSE module access
4. **Security Manager** - Security module access
5. **Safety Supervisor** - Safety module access
6. **Security Supervisor** - Security operations access
7. **HR Officer** - HR module access
8. **Contractor** - Limited contractor access
9. **Read Only User** - View-only access

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Save

2. **Access the Application**
   - URL: `https://Bader-44.github.io/safety-security-management-system`

### Option 2: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bader-44/safety-security-management-system.git
   cd safety-security-management-system
   ```

2. **Open in browser**
   - Double-click `index.html`, or
   - Use Python HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - Access: `http://localhost:8000`

### Option 3: Docker

```bash
docker run -p 8000:80 -v $(pwd):/usr/share/nginx/html nginx
```

## 🔑 Default Login Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | admin | 123456 |
| Manager | manager | 123456 |
| HSE Manager | hse | 123456 |
| Security Manager | security | 123456 |
| HR Officer | hr | 123456 |

## 📁 Project Structure

```
safety-security-management-system/
├── index.html                 # Main HTML file
├── manifest.json              # PWA manifest
├── README.md                  # This file
├── css/
│   └── style.css             # Complete styling with dark mode & RTL
├── js/
│   ├── translations.js        # Arabic & English translations
│   ├── app.js                 # Main application logic
│   ├── dashboard.js           # Dashboard module
│   ├── employees.js           # Employee management
│   ├── attendance.js          # Attendance tracking
│   ├── leave.js               # Leave management
│   ├── salary.js              # Salary management
│   ├── incidents.js           # Incident management
│   ├── nearmiss.js            # Near miss tracking
│   ├── violations.js          # Violation management
│   ├── theft.js               # Theft case tracking
│   ├── security.js            # Security logs
│   ├── patrol.js              # Patrol logs
│   ├── visitors.js            # Visitor management
│   ├── safety.js              # Safety observations
│   ├── inspections.js         # HSE inspections
│   ├── risk.js                # Risk assessment
│   ├── jsa.js                 # Job Safety Analysis
│   ├── toolbox.js             # Toolbox talks
│   ├── fire.js                # Fire extinguisher management
│   ├── firstaid.js            # First aid kits
│   ├── vehicles.js            # Vehicle management
│   ├── assets.js              # Asset management
│   ├── cctv.js                # CCTV management
│   ├── contracts.js           # Contract management
│   ├── training.js            # Training management
│   ├── certificates.js        # Certificate tracking
│   ├── reports.js             # Report generation
│   ├── backup.js              # Backup & restore
│   ├── export.js              # Export utilities
│   ├── notifications.js       # Notification system
│   ├── settings.js            # User settings
│   └── users.js               # User management
└── assets/
    └── (icons and logos)
```

## 💾 Data Storage

All data is stored in browser's LocalStorage:
- Maximum capacity: ~5-10MB per domain
- Persists across browser sessions
- No server required
- Offline functionality

## 📊 Dashboard KPIs

The main dashboard displays 16 key performance indicators:
1. Total Employees
2. Total Contractors
3. Total Visitors
4. Total Incidents
5. Total Near Misses
6. Total Violations
7. Total Theft Cases
8. Total Fire Extinguishers
9. Total First Aid Kits
10. Total Vehicles
11. Total Assets
12. Total Contracts
13. Total Training Records
14. Total Open Actions
15. Total Closed Actions
16. Total Risk Assessments

## 📈 Charts & Analytics

- Monthly Incidents Trend
- Monthly Violations Trend
- Monthly Theft Cases Trend
- Risk Level Distribution (Pie Chart)
- Employee Statistics
- Contractor Statistics
- Training Status
- Fire Extinguisher Status
- Vehicle Status
- Inspection Status

## 🔄 Risk Assessment Matrix

Automatic 5×5 Risk Matrix:
- **1-5**: Low Risk
- **6-10**: Medium Risk
- **11-15**: High Risk
- **16-25**: Extreme Risk

Formula: Risk Score = Likelihood × Severity

## 📤 Export Capabilities

Every module supports:
- **Excel Export** (.xlsx) - Professional formatting with headers
- **PDF Export** (.pdf) - Print-friendly format
- **Print View** - Direct browser printing

## 🔔 Notification System

Automatic alerts for:
- Expired contracts
- Expiring contracts (within 30 days)
- Expired training certificates
- Expiring training certificates
- Fire extinguisher inspections due
- First aid kit inspections due
- Vehicle insurance due
- Vehicle registration due
- Open incidents
- Open violations
- Certificate expirations

## 🌍 Language Support

- **Arabic** - Full RTL support with Arabic translations
- **English** - Full LTR support with English translations
- One-click language switch
- All UI elements, forms, tables, and notifications translated

## 🎨 Theme Support

- **Light Mode** - Default professional white theme
- **Dark Mode** - Eye-friendly dark theme
- Toggle with button in navbar
- Settings persisted in browser

## 🔐 Security Features

- Role-based access control (RBAC)
- Login authentication
- Session management
- Permission-based module access
- Data validation on forms
- Secure local storage usage

## 📱 Responsive Design

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Optimized for all screen sizes
- Touch-friendly interface

## ✨ Advanced Features

### Auto-Calculations
- Net Salary = Basic + Allowances - Deductions
- Risk Score = Likelihood × Severity
- Days Worked = Check Out - Check In

### Smart Alerts
- Expiring contracts notification
- Overdue inspections
- Certificate expiry warnings
- Equipment maintenance reminders

### Search & Filtering
- Global search across all modules
- Filter by date range
- Filter by department
- Filter by status
- Filter by employee
- Filter by location

### Backup & Restore
- Export complete database as JSON
- Import database from JSON
- One-click backup
- One-click restore

## 🐛 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Usage Tips

1. **First Time Setup**: Create users and assign roles
2. **Import Data**: Use backup feature to import existing data
3. **Export Reports**: Generate reports for analysis
4. **Set Reminders**: Enable notifications for important dates
5. **Mobile Access**: Add to home screen for PWA experience

## 🔄 Backup & Restore

### Backup
1. Go to Reports & Analytics → Backup & Restore
2. Click "Download Backup"
3. Save JSON file

### Restore
1. Go to Reports & Analytics → Backup & Restore
2. Click "Upload Backup"
3. Select JSON file
4. Confirm restore

## 📝 License

MIT License - Free for personal and commercial use

## 👨‍💻 Author

Developed for Enterprise Safety & Security Management

## 🤝 Support

For issues and feature requests, please create an issue on GitHub.

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Database synchronization
- [ ] Multi-user collaboration
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Custom reports builder
- [ ] API for integrations
- [ ] Advanced user audit trail

---

**Built with ❤️ for Safety & Security Management**

*Last Updated: 2026-05-31*
