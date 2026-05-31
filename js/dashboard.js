// Dashboard Module
function loadDashboard() {
    const html = `
    <div class="row mb-4">
        <div class="col-12">
            <h4 class="mb-4"><i class="fas fa-chart-line"></i> Dashboard</h4>
        </div>
    </div>
    
    <!-- KPI Cards -->
    <div class="row mb-4">
        <div class="col-md-4 col-lg-2 mb-3">
            <div class="kpi-card">
                <i class="fas fa-users text-primary"></i>
                <div class="kpi-value" id="totalEmployees">0</div>
                <div class="kpi-label">Employees</div>
            </div>
        </div>
        <div class="col-md-4 col-lg-2 mb-3">
            <div class="kpi-card">
                <i class="fas fa-exclamation-circle text-danger"></i>
                <div class="kpi-value" id="totalIncidents">0</div>
                <div class="kpi-label">Incidents</div>
            </div>
        </div>
        <div class="col-md-4 col-lg-2 mb-3">
            <div class="kpi-card">
                <i class="fas fa-hand-paper text-warning"></i>
                <div class="kpi-value" id="totalNearMiss">0</div>
                <div class="kpi-label">Near Miss</div>
            </div>
        </div>
        <div class="col-md-4 col-lg-2 mb-3">
            <div class="kpi-card">
                <i class="fas fa-gavel text-dark"></i>
                <div class="kpi-value" id="totalViolations">0</div>
                <div class="kpi-label">Violations</div>
            </div>
        </div>
        <div class="col-md-4 col-lg-2 mb-3">
            <div class="kpi-card">
                <i class="fas fa-car text-info"></i>
                <div class="kpi-value" id="totalVehicles">0</div>
                <div class="kpi-label">Vehicles</div>
            </div>
        </div>
        <div class="col-md-4 col-lg-2 mb-3">
            <div class="kpi-card">
                <i class="fas fa-boxes text-success"></i>
                <div class="kpi-value" id="totalAssets">0</div>
                <div class="kpi-label">Assets</div>
            </div>
        </div>
    </div>
    
    <!-- Charts -->
    <div class="row">
        <div class="col-lg-6 mb-4">
            <div class="card">
                <div class="card-header">Monthly Incidents</div>
                <div class="card-body" style="height: 300px;">
                    <canvas id="incidentsChart"></canvas>
                </div>
            </div>
        </div>
        <div class="col-lg-6 mb-4">
            <div class="card">
                <div class="card-header">Status Distribution</div>
                <div class="card-body" style="height: 300px;">
                    <canvas id="statusChart"></canvas>
                </div>
            </div>
        </div>
    </div>
    `;
    
    setTimeout(() => {
        updateKPIs();
        initCharts();
    }, 100);
    
    return html;
}

function updateKPIs() {
    const employees = loadData('employees') || [];
    const incidents = loadData('incidents') || [];
    const nearmiss = loadData('nearmiss') || [];
    const violations = loadData('violations') || [];
    const vehicles = loadData('vehicles') || [];
    const assets = loadData('assets') || [];
    
    if (document.getElementById('totalEmployees')) document.getElementById('totalEmployees').textContent = employees.length;
    if (document.getElementById('totalIncidents')) document.getElementById('totalIncidents').textContent = incidents.length;
    if (document.getElementById('totalNearMiss')) document.getElementById('totalNearMiss').textContent = nearmiss.length;
    if (document.getElementById('totalViolations')) document.getElementById('totalViolations').textContent = violations.length;
    if (document.getElementById('totalVehicles')) document.getElementById('totalVehicles').textContent = vehicles.length;
    if (document.getElementById('totalAssets')) document.getElementById('totalAssets').textContent = assets.length;
}

function initCharts() {
    const ctx1 = document.getElementById('incidentsChart');
    if (ctx1) {
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Incidents',
                    data: [5, 8, 6, 9, 7, 4, 6, 8, 5, 7, 6, 9],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: true } }
            }
        });
    }
    
    const ctx2 = document.getElementById('statusChart');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['Open', 'Closed', 'Pending'],
                datasets: [{ data: [12, 18, 8], backgroundColor: ['#3498db', '#27ae60', '#f39c12'] }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}
