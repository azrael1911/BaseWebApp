//以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
$.validator.setDefaults({
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
        element.closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    errorPlacement: function (error, element) {
        if (element.is(":radio") || element.is(":checkbox")) {
            error.appendTo(element.parent().parent().parent());
        } else {
            error.appendTo(element.parent());
        }
    },
    submitHandler: function() {
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var username = $('#username').val();
        var password = $('#confirm_password').val();
        var email = $('#email').val();
        var userInfo = {
            firstname : firstname,
            lastname : lastname,
            username : username,
            password : password,
            email : email
        };
        var jsonstr = JSON.stringify(userInfo);
        alert(jsonstr);
        $.ajax({
            type : "POST",
            async : true,
            url : "/register/adduser",
            data : {
                "json" : jsonstr
            },
            dataType : "json",
            success : function(result) {
                if (result.info) {
                    swal({
                        title: "注册成功!",
                        text: result.msg,
                        type: "success"
                    }, function () {
                        window.location.href = "/";
                    });
                } else {
                    swal({
                        title: "注册失败!",
                        text: result.msg,
                        type: "error"
                    });
                }
            },
            error : function() {
                swal({
                    title: "失败!",
                    text: "服务器错误,请联系管理员!",
                    type: "error"
                }, function () {
                    window.location.href = "/";
                });
            }
        });
    },
    errorClass: "help-block m-b-none", validClass: "help-block m-b-none"
});

//以下为官方示例
$().ready(function () {
    // validate the comment form when it is submitted
    $("#commentForm").validate();
    // validate signup form on keyup and submit
    var icon = "<i class='fa fa-times-circle'></i> ";
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: icon + "请输入你的姓氏",
            lastname: icon + "请输入您的名字",
            username: {
                required: icon + "请输入您的用户名",
                minlength: icon + "用户名必须两个字符以上"
            },
            password: {
                required: icon + "请输入您的密码",
                minlength: icon + "密码必须5个字符以上"
            },
            confirm_password: {
                required: icon + "请再次输入密码",
                minlength: icon + "密码必须5个字符以上",
                equalTo: icon + "两次输入的密码不一致"
            },
            email: icon + "请输入您的E-mail",
            agree: {
                required: icon + "必须同意协议后才能注册",
                element: '#agree-error'
            }
        }
    });
});