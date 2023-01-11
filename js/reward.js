function reward(){
    Swal.fire({
      title: '<strong>您正在为 <u>wsb</u> 充电</strong>',
      html: '<b>请选择您的付款方式</b>',
      icon: 'info',
      showCancelButton: true,
      cancelButtonText:
        '<i class="fa-brands fa-weixin"></i> 微信支付',
      cancelButtonColor: '#2AAE67',
    }).then((result) => {
       if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: '感谢您',
          html: '请打开微信 <b>[扫一扫]</b> 以充电',
          imageUrl: 'https://preview.cloud.189.cn/image/imageAction?param=923C5847721EDFE2681A37C12A10D6F47039ED62FC9B5C82612F32E5A340B75412FF53A3CB77D0CB286AF52DBFC29AAE3D6EB82631BBCABF435D1FBE17CF0623B0D477F350ED1D67DCB90D71749FEE82DE5ACBF3E4F8C2320556E96250CB92F633F611850D378F3177BD0BB482B4F6004D0CFC22',
          imageWidth: 175,
          imageHeight: 175,
          imageAlt: 'Custom image'
        }).then((result) => {
          Swal.fire(
            '充电成功',
            '感谢您的支持',
            'success'
          )
        })
      }
    })
  }
  