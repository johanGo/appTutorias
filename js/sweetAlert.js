buttonSchedule.addEventListener('click', (e)=>{
    e.preventDefault();
    const userSchedule = document.querySelector('#userSchedule');
    const horarios = document.querySelector('#horarios');
    const descriptionSch = document.querySelector('#descriptionSchedule')


    if(userSchedule.value =='' || horarios.value == '' || descriptionSch.value == ''){
        messageWarning.style.display='flex';
        setTimeout(() => {
            messageWarning.style.display='none'
        }, 3000);
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Programada',
            text: `Hola ${userSchedule.value} la tutoria para el dia ${horarios.value} ya quedo agendada`,
            showConfirmButton: false,
            timer: 3000
        })
        userSchedule.value = '';
        horarios.value = '';
        descriptionSch.value ='';
        
    }
})
