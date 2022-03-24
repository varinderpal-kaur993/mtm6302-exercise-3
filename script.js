const $container = document.getElementById('container')
const $form = document.getElementById('form')
const $time = document.getElementById('time')
const $job_listing = document.getElementById('joblist')
const $save = document.getElementById('save')
const $submit = document.getElementById('submit')
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')


if (localStorage.getItem('joblist')!= null){
    let joblist = localStorage.getItem('joblist')
    let time = localStorage.getItem('time')
    joblist= JSON.parse(joblist)
    $form.elements.name.value = joblist.name
    $form.elements.status.value = joblist.status
    $form.elements.qualification.value = joblist.qualification
    $time.innerHTML= 'Last saved on:'+ time
}
$save.addEventListener('click', function(e){
    e.preventDefault()
const d =  new Date()
console.log($time)
    $time.innerHTML = 'last saved on:'+ d
    const joblist = {
        name:$form.elements.name.value,
        status:$form.elements.status.value,
        qualification:$form.elements.qualification.value,
    }
   

    localStorage.setItem('joblist', JSON.stringify(joblist))
    localStorage.setItem('time', d)
})
$form.addEventListener('submit', function(e){
    e.preventDefault()
    $form.reset()
    $time.innerHTML = ''
    localStorage.clear()
    alertPlaceholder.innerHTML = '<div class="alert alert-success  alert-dismissible" role="alert">' +' This message has been submitted.' + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
})
