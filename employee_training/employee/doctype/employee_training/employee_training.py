# Copyright (c) 2026, lakshmana
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class EmployeeTraining(Document):

    def validate(self):
        frappe.logger("employee_training").info(
            f"Validating Employee Training: {self.name}"
        )

        frappe.logger("employee_training").info(
            f"Employee ID: {self.employee_id}"
        )

        frappe.logger("employee_training").info(
            f"Training Name: {self.training_name}"
        )

        frappe.logger("employee_training").info(
            f"Status: {self.status}"
        )


@frappe.whitelist()
def get_training_records():
    return frappe.get_all(
        "Employee Training",
        fields=[
            "name",
            "employee_id",
            "employee_name",
            "department",
            "training_name",
            "training_type",
            "training_date",
            "trainer_name",
            "duration_hours",
            "status",
            "is_certified",
        ],
    )