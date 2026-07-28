
let aCourse = {
    code: 'WDD131',
    title: 'Dynamic Web Fundamentals',
    credits: 2, 
    sections: [
        { section: 1, enrolled: 95, instructor: 'David Blazzard'},
        { section: 2, enrolled: 80, instructor: 'Matthew Kearl'}
    ],
}

function setCourseInformation(course_info) {
        document.querySelector('#courseName').textContent = `${course_info.code} ${course_info.title}`
    }

function renderSections(course_info) {
    let tablebody = document.querySelector('#sections tbody');
    let rows = '';

   for(const section of course_info.sections) {
        rows += `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        </tr>`;
   }
   tablebody.innerHTML = rows;
}

setCourseInformation(aCourse);
renderSections(aCourse);