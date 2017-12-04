function apply_vue_ui (post_title,post_body,post_id,make_it_public) {
  return new Vue({
      //el:'#app',
      methods:{
          redirect_to:function(number){
              window.location = `/pages/${number}`;
          },
          redirect:function(page){
              app.redirect_to(page)
          },
          logout:function(){
            $.ajax({
                url:'/users/sign_out',
                type:"DELETE",
                success:function(){
                    Turbolinks.visit(window.location);
                },
                error:function(){
                    app.$message.error("Không thể đăng xuất do một vài lỗi đã xảy ra");
                }
            })
          },
          redirect_to_root:function(){
              Turbolinks.visit("/")
          },
          login_page:function(){
            Turbolinks.visit("/users/sign_in");
          },
          new_post_page:function(){
            Turbolinks.visit("/posts/new");
          },
          delete_post:function(){
              app = this;
              app.$confirm('Bạn có thể sẽ hối tiếc nếu xóa post này?', 'Cảnh báo', {
                  confirmButtonText: 'Bố mày cứ xóa',
                  cancelButtonText: 'Thôi nghĩ lại rồi',
                  type: 'warning'
                }).then(function(){
                  $.ajax({
                      url: `/posts/${post_id}`,
                      type:'DELETE',
                      error: function(){
                          app.$message.error('Một vài lỗi dường như đã xảy ra');
                      }
                  })
                }).catch(function(){

                })
          }
      },
      //i really really miss you
      data:{
          make_it_public:make_it_public,
          remember_me: false,
          post_id:post_id,
          form_rules:{
              post_title:[
                  { required: true, message: 'Vui lòng không bỏ trống tiêu đề', trigger: 'blur' },
              ]
          },
          formRule:{
              post_title: post_title,
              post_body: post_body
          },
          remember_me_changed:function(new_value){
              $("#remember_me input[type='checkbox'").val(new_value? "1":"0");
          }
      },
      mounted:function(){
          document.title= post_title? post_title : "TheEEs'sLog";
          $('pre code').each(function(i, block) {
              hljs.highlightBlock(block);
          });
      }
  })
}