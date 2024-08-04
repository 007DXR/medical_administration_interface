
function updateDoctorData(doctor_data) {
    doctor_dict = {}
    let doctor_list_tbody = document.getElementById('doctor-list-tbody');
    let doctor_list = doctor_list_tbody.getElementsByTagName('tr');
    // 注意：必须倒序删除，不能正序删除
    for (let i = doctor_list.length - 1; i >= 0; --i) {
        doctor_list_tbody.removeChild(doctor_list[i]);
    }
    for (let i in doctor_data) {
        doctor_dict[doctor_data[i]['doctor_id']] = doctor_data[i];
        addDoctorList(doctor_data[i]);
    }
    const buttons = document.querySelectorAll('.doctor_info_button');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            let doctor_id = event.target.getAttribute("doctor-id");
            if (doctor_id !== null) {
                document.getElementById('doctor-list').style.display = 'none';
                updateDoctorInfoTable(doctor_id);
            }
        });
    });
}
function getDoctorData(is_checked) {
    // , { mode: 'no-cors' } 设置 CORS policy允许跨域请求
    if (is_checked === true) api_str = 'chkddoctorinfo';
    else api_str = 'doctorinfo';
    fetch('http://47.122.20.205:8000/' + api_str)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateDoctorData(data);
        })
        .catch(error => {
            console.error('请求失败:', error);
        });
}
function getHospitalData() {
    fetch('http://47.122.20.205:8000/hospitalinfo/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addHospitalList(data);
        })
        .catch(error => {
            console.error('请求失败:', error);
        });
}
function addHospitalList(hospital_data) {
    // console.log(doctor_data)
    let tbody = document.getElementById('hospital-list-tbody');

    for (let key in hospital_data) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
                <td>`+ key + `</td>
                <td>`+ hospital_data[key] + `</td>
           `;
        tbody.appendChild(tr);
    }
}
function addDoctorList(doctor_data) {
    // console.log(doctor_data)
    let tbody = document.getElementById('doctor-list-tbody');
    let tr = document.createElement('tr');
    tr.innerHTML = `
                <td>`+ doctor_data['name'] + `</td>
                <td>`+ doctor_data['hospital'] + `</td>
                <td> <div doctor-id=`+ doctor_data['doctor_id'] + ` id=doctor-id-` + doctor_data['doctor_id'] + `  class="doctor_info_button button">详情</div></td>
           `;
    tbody.appendChild(tr);
}
function updateDoctorInfoTable(doctor_id) {
    current_doctor_id = Number(doctor_id);
    document.getElementById('doctor-info').style.display = 'block';
    let doctor_info_table = document.getElementById('doctor-info-table')

    doctor_info_table.removeChild(doctor_info_table.getElementsByTagName('tbody')[0]);
    let tbody = document.createElement('tbody');
    let doctor_data = doctor_dict[doctor_id];
    for (let key in doctor_data) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
          <td>`+ key_mapping[key] + `</td>
          <td>`+ (key in value_mapping ? value_mapping[key][doctor_data[key]] : doctor_data[key]) + `</td>
          `
        tbody.appendChild(tr);
    }
    // let tr = document.createElement('tr');
    // tr.innerHTML = `
    //     <td >
    //     <div id="reject_button">拒绝</div>
    //     </td>
    //     <td >
    //     <div id="pass_button">通过</div>
    //     </td>`
    // tbody.appendChild(tr);
    doctor_info_table.appendChild(tbody);
}

const key_mapping = { "doctor_id": "医生编号", "name": "医生姓名", "sex": "性别", "title": "医生职称", "hospital": "医院名称", "hospital_level": "医院级别", "province": "省份", "phone": "联系方式" }
const sex_mapping = { 1: "男", 2: "女" }
const title_mapping = { 0: "住院医师", 1: "主治医师", 2: "副主任医师", 3: "主任医师", 4: "护士", 5: "护师", 6: "主管护师" }
const level_mapping = { 1: "一级", 2: "二级", 3: "三级" }
const value_mapping = {
    "sex": sex_mapping,
    "title": title_mapping,
    "hospital_level": level_mapping
}