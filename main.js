
const baseUrl = 'https://blushing-erin-lovebird.cyclic.cloud/';
const newsLetterApi = baseUrl + "api/newsletters/subs/create";
const contactUsApi = baseUrl + "api/contacts/create";
const appointmentsApi = baseUrl + "api/leads/create";
const promotionsLeadsAPI = baseUrl + "api/leads/promotions/create";
const clientId = "";
const clinic = "";
const doctor = "";
const leadEnquiryTag = {
  url: window.location.href,
};

function convertFormToJSON(form) {
  let array = $(form).serializeArray();
  let json = {};
  $.each(array, function () {
    json[this.name] = this.value || "";
  });
  json.clinic = clinic;
  json.doctor = doctor;
  json.leadEnquiryTag = leadEnquiryTag;
  json.promotionType = "Sankranti Promotions";
  console.log(json)
  return json;
}

function disableSubmitButton() {
  $('.w-button').prop('value', 'Please wait...');
  $('.w-button').prop('disabled', true);
}

function enableSubmitButton() {
  $('.w-button').prop('value', 'Submit');
  $('.w-button').prop('disabled', false);
}

// Newsletter Subscriptions form function.
$(`form[action="${newsLetterApi}"]`).each(function (i,el) {
  let form = $(el);
  form.submit(function (e) {
    e.preventDefault();
    form = $(e.target);
    let data = convertFormToJSON(form);
    console.log('formData : ', data);
    let action = newsLetterApi; //form.attr("action");
    disableSubmitButton()
    $.ajax({
      url: action,
      method: "POST",
      data: JSON.stringify(data),
      headers: {"client_id": clientId},
      contentType: "application/json",
      dataType: "json",
      success: function () {
        let parent = $(form.parent());
        enableSubmitButton()
        // Hide the form
        parent.children("form").css("display", "none");
        // Display the "Done" block
        parent.children(".w-form-done").css("display", "block");
        setTimeout(() => {
          parent.children("form").css("display", "block");
          parent.children(".w-form-done").css("display", "none");
        }, 3000);
      },
      error: function () {
        let parent = $(form.parent());
        enableSubmitButton()
        // Display the "Failed" block
        parent.find(".w-form-fail").css("display", "block");
      },
    });
  });
});

// Contact Us form function.
$(`form[action="${contactUsApi}"]`).each(function (i,el) {
  let form = $(el);
  form.submit(function (e) {
    e.preventDefault();
    form = $(e.target);
    let data = convertFormToJSON(form);
    console.log('formData : ', data);
    let action = contactUsApi; //form.attr("action");
    disableSubmitButton()
    $.ajax({
      url: action,
      method: "POST",
      data: JSON.stringify(data),
      headers: {"client_id": clientId},
      contentType: "application/json",
      dataType: "json",
      success: function () {
        let parent = $(form.parent());
        enableSubmitButton()
        // Hide the form
        parent.children("form").css("display", "none");
        // Display the "Done" block
        parent.children(".w-form-done").css("display", "block");
        setTimeout(() => {
          parent.children("form").css("display", "block");
          parent.children(".w-form-done").css("display", "none");
        }, 3000);
      },
      error: function () {
        let parent = $(form.parent());
        enableSubmitButton()
          // Display the "Failed" block
        parent.find(".w-form-fail").css("display", "block");
      },
    });
  });
});

// Appointments form function.
$(`form[action="${appointmentsApi}"]`).each(function (i,el) {
  let form = $(el);
  form.submit(function (e) {
    e.preventDefault();
    form = $(e.target);
    let data = convertFormToJSON(form);
    console.log('formData : ', data);
    let action = appointmentsApi //form.attr("action");
    disableSubmitButton()
    $.ajax({
      url: action,
      method: "POST",
      data: JSON.stringify(data),
      headers: {"client_id": clientId},
      contentType: "application/json",
      dataType: "json",
      success: function () {
        let parent = $(form.parent());
        // Hide the form
        enableSubmitButton();
        parent.children("form").css("display", "none");
        // Display the "Done" block
        parent.children(".w-form-done").css("display", "block");

        setTimeout(() => {
          $('#wf-form-BRIX---Contact-V5')[0].reset()
          parent.children("form").css("display", "block");
          parent.children(".w-form-done").css("display", "none");
        }, 3000);
      },
      error: function () {
        let parent = $(form.parent());
        enableSubmitButton();
        // Display the "Failed" block
        parent.find(".w-form-fail").css("display", "block");
      },
    });
  });
});

// https://blushing-erin-lovebird.cyclic.cloud/api/leads/promotions/create
// Promotions Leads form function.
$(`form[action="${promotionsLeadsAPI}"]`).each(function (i,el) {
  let form = $(el);
  form.submit(function (e) {
    e.preventDefault();
    form = $(e.target);
    let data = convertFormToJSON(form);
    console.log('formData : ', data);
    let action = appointmentsApi //form.attr("action");
    disableSubmitButton()
    $.ajax({
      url: action,
      method: "POST",
      data: JSON.stringify(data),
      headers: {"client_id": clientId},
      contentType: "application/json",
      dataType: "json",
      success: function () {
        let parent = $(form.parent());
        // Hide the form
        enableSubmitButton();
        parent.children("form").css("display", "none");
        // Display the "Done" block
        parent.children(".w-form-done").css("display", "block");

        setTimeout(() => {
          $('#wf-form-BRIX---Contact-V5')[0].reset()
          parent.children("form").css("display", "block");
          parent.children(".w-form-done").css("display", "none");
        }, 3000);
      },
      error: function () {
        let parent = $(form.parent());
        enableSubmitButton();
        // Display the "Failed" block
        parent.find(".w-form-fail").css("display", "block");
      },
    });
  });
});