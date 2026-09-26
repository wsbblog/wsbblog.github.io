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
          imageUrl: '/images/wsb2.webp',
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
  