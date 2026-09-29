# Frappe Fundamental Task - Employee Training Bench

This repository contains the Frappe bench setup and custom application developed for the **Frappe Fundamental Task**.

## Repository Structure

```text
├── apps/
│   └── employee_training/       # Custom Frappe App
│       ├── employee_training/
│       │   ├── employee/
│       │   │   └── doctype/
│       │   │       └── employee_training/
│       │   │           ├── employee_training.json
│       │   │           ├── employee_training.py
│       │   │           ├── employee_training.js
│       │   │           └── test_employee_training.py
│       │   └── hooks.py
│       └── pyproject.toml
├── sites/
│   ├── apps.txt
│   ├── apps.json
│   └── common_site_config.json
├── Procfile
└── patches.txt
```

## Features Implemented

### 1. `Employee Training` DocType
Custom DocType created under the **Employee** module with the following fields:
- **Employee Information**: Employee ID, Employee Name, Department, Employee Email
- **Training Information**: Training Name, Training Type, Training Date, Trainer Name, Duration (Hours)
- **Training Result**: Status (`Scheduled`, `In Progress`, `Completed`, `Cancelled`), Is Certified (Check)
- **Additional Information**: Description, Feedback

### 2. Server-side Controller (`employee_training.py`)
- **`validate()`**: Logs training validation, employee details, training name, and status using `frappe.logger("employee_training")`.
- **`get_training_records()`**: Whitelisted API endpoint to retrieve all employee training records with key fields.

### 3. Client-side Form Scripts (`employee_training.js`)
- **"Fetch Training Records" Custom Button**: Calls `get_training_records` via `frappe.call` and renders a modal dialog containing a formatted table of all training records.
- **"Download PDF" Custom Button**: Triggers direct download of the training certificate via Frappe's print format endpoint.

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:lakshmana-4444/FrappeFundamentalTask.git
   cd FrappeFundamentalTask
   ```

2. **Install Frappe Bench dependencies and apps**:
   ```bash
   bench setup requirements
   bench get-app ./apps/employee_training
   ```

3. **Install app to site**:
   ```bash
   bench --site <your-site> install-app employee_training
   bench --site <your-site> migrate
   ```
