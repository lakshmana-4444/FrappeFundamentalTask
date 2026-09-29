frappe.ui.form.on("Employee Training", {
    refresh(frm) {
        frm.add_custom_button("Fetch Training Records", function () {
            frappe.call({
                method: "employee_training.employee.doctype.employee_training.employee_training.get_training_records",
                args: {
                    name: frm.doc.name
                },
                callback: function (response) {
                    const records = response.message || [];

                    const rows = records.map(record => `
                        <tr>
                            <td>${record.employee_id || ""}</td>
                            <td>${record.employee_name || ""}</td>
                            <td>${record.training_name || ""}</td>
                            <td>${record.training_type || ""}</td>
                            <td>${record.status || ""}</td>
                        </tr>
                    `).join("");

                    const dialog = new frappe.ui.Dialog({
                        title: "Employee Training Records",
                        fields: [
                            {
                                fieldtype: "HTML",
                                fieldname: "training_records"
                            }
                        ]
                    });

                    dialog.fields_dict.training_records.$wrapper.html(`
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee Name</th>
                                    <th>Training Name</th>
                                    <th>Training Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>
                    `);

                    dialog.show();
                }
            });
        });


        frm.add_custom_button("Download PDF", function () {
            const docname = frm.doc.name;

            const url = `/api/method/frappe.utils.print_format.download_pdf`
                + `?doctype=Employee%20Training`
                + `&name=${encodeURIComponent(docname)}`
                + `&format=${encodeURIComponent("Employee Training Certificate")}`;

            window.open(url);
        });

    }
});