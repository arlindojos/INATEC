
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts';
import { Table } from './styles';

const TableDesktop: React.FC = () => {
  const { schedule } = useContext(AuthContext).data.uClass;
  const { monday, tuesday, wednesday, thursday, friday, saturday } = schedule;

  const TeacherProps = [
    {
      name: '',
      discipline: ''
    }
  ]

  let mondayTeachers: typeof TeacherProps= [];
  let tuesdayTeachers: typeof TeacherProps= [];
  let wednesdayTeachers: typeof TeacherProps = [];
  let thursdayTeachers: typeof TeacherProps = [];
  let fridayTeachers: typeof TeacherProps = [];
  let saturdayTeachers: typeof TeacherProps = [];

  if(!schedule) {
    return <p>Carregando...</p>

  } else {
    
    monday && (
      monday.map(teacher => (
        teacher.time.split(",").forEach(() => (
          mondayTeachers.push({
            name: teacher.name,
            discipline: teacher.discipline
          })
        ))
      ))
    )

    tuesday && (
      tuesday.map(teacher => (
        teacher.time.split(",").forEach(() => (
          tuesdayTeachers.push({
            name: teacher.name, 
            discipline: teacher.discipline
          })
        ))
      ))
    )

    wednesday && (
      wednesday.map(teacher => (
        teacher.time.split(",").forEach(() => (
          wednesdayTeachers.push({
            name: teacher.name, 
            discipline: teacher.discipline
          })
        ))
      ))
    )

    thursday &&(
      thursday.map(teacher => (
        teacher.time.split(",").forEach(() => (
          thursdayTeachers.push({
            name: teacher.name, 
            discipline: teacher.discipline
          })
        ))
      ))
    )

    friday && (
      friday.map(teacher => (
        teacher.time.split(",").forEach(() => (
          fridayTeachers.push({
            name: teacher.name, 
            discipline: teacher.discipline
          })
        ))
      ))
    )

    saturday && (
      saturday.map(teacher => (
        teacher.time.split(",").forEach(() => (
          saturdayTeachers.push({
            name: teacher.name, 
            discipline: teacher.discipline
          })
        ))
      ))
    )
  }
  
  
  return (
    <Table>
      <tbody>
        <td className="table-hours">
          <tr>
            <td className="content"></td>
          </tr>
          <tr>
            <td className="content"></td>
          </tr>
          
          <th className="content">Horas</th>
          <tr>
            <td className="content">07:00 - 07:45</td>
          </tr>
          <tr>
            <td className="content">07:45 - 08:30</td>
          </tr>
          <tr>
            <td className="content">08:40 - 09:25</td>
          </tr>
          <tr>
            <td className="content">09:25 - 10:10</td>
          </tr>
          <tr>
            <td className="content">10:20 - 11:05</td>
          </tr>
          <tr>
            <td className="content">11:05 - 11:55</td>
          </tr>
        </td>
        
        {
          monday && (
            <td>
              <th colSpan={2}>2ª feira</th>
            <tr>
            <td>
              <tr>
                <td className="content header">Disciplina</td>
              </tr>
              {
                mondayTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="content">{teacher.discipline}</td>
                </tr>
                ))
              }
            </td>
            <td>
              <tr>
                <td className="content header">Docente</td>
                </tr>
                  {
                    mondayTeachers.map((teacher, index) => (
                      <tr key={index}>
                        <td className="content">{teacher.name}</td>
                      </tr>
                      ))
                  }
                </td>
              </tr>
            </td>
          )
        }
        {
          tuesday && (
            <td>
              <th colSpan={2}>3ª feira</th>
            <tr>
            <td>
              <tr>
                <td className="content header">Disciplina</td>
              </tr>
              {
                tuesdayTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="content">{teacher.discipline}</td>
                </tr>
                ))
              }
            </td>
            <td>
              <tr>
                <td className="content header">Docente</td>
                </tr>
                  {
                    tuesdayTeachers.map((teacher, index) => (
                      <tr key={index}>
                        <td className="content">{teacher.name}</td>
                      </tr>
                    ))
                  }
                </td>
              </tr>
            </td>
          )
        }
        {
          wednesday && (
            <td>
              <th colSpan={2}>4ª feira</th>
            <tr>
            <td>
              <tr>
                <td className="content header">Disciplina</td>
              </tr>
              {
                wednesdayTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="content">{teacher.discipline}</td>
                </tr>
                ))
              }
            </td>
            <td>
              <tr>
                <td className="content header">Docente</td>
                </tr>
                  {
                    wednesdayTeachers.map((teacher, index) => (
                      <tr key={index}>
                        <td className="content">{teacher.name}</td>
                      </tr>
                    ))
                  }
                </td>
              </tr>
            </td>
          )
        }
        {
          thursday && (
            <td>
              <th colSpan={2}>5ª feira</th>
            <tr>
            <td>
              <tr>
                <td className="content header">Disciplina</td>
              </tr>
              {
                thursdayTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="content">{teacher.discipline}</td>
                </tr>
                ))
              }
            </td>
            <td>
              <tr>
                <td className="content header">Docente</td>
                </tr>
                  {
                    thursdayTeachers.map((teacher, index) => (
                      <tr key={index}>
                        <td className="content">{teacher.name}</td>
                      </tr>
                    ))
                  }
                </td>
              </tr>
            </td>
          )
        }
        {
          friday && (
            <td>
              <th colSpan={2}>6ª feira</th>
            <tr>
            <td>
              <tr>
                <td className="content header">Disciplina</td>
              </tr>
              {
                fridayTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="content">{teacher.discipline}</td>
                </tr>
                ))
              }
            </td>
            <td>
              <tr>
                <td className="content header">Docente</td>
                </tr>
                  {
                    fridayTeachers.map((teacher, index) => (
                      <tr key={index}>
                        <td className="content">{teacher.name}</td>
                      </tr>
                    ))
                  }
                </td>
              </tr>
            </td>
          )
        }
        {
          saturday && (
            <td>
              <th colSpan={2}>Sábado</th>
            <tr>
            <td>
              <tr>
                <td className="content header">Disciplina</td>
              </tr>
              {
                saturdayTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="content">{teacher.discipline}</td>
                </tr>
                ))
              }
            </td>
            <td>
              <tr>
                <td className="content header">Docente</td>
                </tr>
                  {
                    saturdayTeachers.map((teacher, index) => (
                      <tr key={index}>
                        <td className="content">{teacher.name}</td>
                      </tr>
                    ))
                  }
                </td>
              </tr>
            </td>
          )
        }
      </tbody>
    </Table>  
  )
}

export default TableDesktop;