
export default function json2html(data) {
    
    let html = `<table data-user="vaishu.vaitla@gmail.com">
      <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
      </thead>
      <tbody>`;
  
 
    data.forEach(item => {
      html += `<tr>
        <td>${item.Name || ''}</td>
        <td>${item.Age || ''}</td>
        <td>${item.Gender || ''}</td>
      </tr>`;
    });
  
    
    html += `</tbody>
    </table>`;
  

    return html;
  }
  
