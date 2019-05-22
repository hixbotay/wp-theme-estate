<?php
/*
Template name: Page - Full Width
*/
get_header(); 
$option_values = get_option( 'fvn_config' );
$id_number = 1;
?>

<?php do_action( 'flatsome_before_page' ); ?>
<style>
.menu_cat_furn {
    margin: 0 -20px;
}
.menu_cat_furn .cats_content {
    width: calc(33.33% - 40px);
    margin: 0 20px;
    float: left;
}
.menu_cat_furn .form_note {
    background: #fff;
    padding: 30px;
    box-sizing: border-box;
    text-align: justify;
    color: red;
    font-size: 17px;
}
#wrapper, #main{
background-color:#F8F8F8;
}
.menu_cat_furn .form_note .link {
    text-align: center;
    margin-top: 30px;
}
.menu_cat_furn .form_note .link a {
    padding: 10px 20px;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 16px;
    background: var(--main-color);
}
.description a {
    color: #00A7F4;
}
</style>
<div class="wrapper_content nohome">
	<div class="main_wrapper container  ">
		<div class="main-area-full">

			<div class="furnitures_home">
				<div class="menu_cat_furn cls">

					<form method="post" action="#" name="furnitures" class="form">
						<div class="cats_content">
							<div class="menu_cat_furn_0 menu_cat ">
								<h2 class="title_cat_funr active" id="title_funr_1">
									Báo giá thiết kế nội thất </h2>
							</div>
							<div class="fields">
								<label for="kind">Thể loại</label><br>
								<select name="kind_1" id="kind_1" class="kind">
									<?php $options = explode(PHP_EOL,$option_values['kind_1']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_kind_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_1">Phong cách thiết kế nội thất</label><br>
								<select name="stype_1" id="stype_1" class="stype">
									<?php $options = explode(PHP_EOL,$option_values['stype']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="quality_1">Diện tích (m2)</label><br>
								<input type="number" name="quality" class="quality" id="quality_1">
							</div>
							<div class="fields">
								<label for="total_1">Thành tiền (VNĐ)</label><br>
								<input type="text" name="total" class="total" id="total_1" readonly="">

							</div>
							<input type="hidden" name="vat" class="vat" id="vat" value="1">
						</div>
						<div class="form_note cats_content description">
							<div>
								<p>Bạn đang có nhu cầu tìm kiếm đơn vị thiết kế nội thất trọn gói?</p>

								<p>Bạn muốn biến ý tưởng của mình thành một bản thiết kế thực tế mà chưa biết làm thế
									nào??</p>

								<p>Bạn băn khoăn không biết kinh phí khoảng bao nhiêu để thiết kế cho căn nhà của mình?
								</p>

								<p>Để giải đáp được các thắc mắc của bạn, RoyalHome thấu hiểu được ngôi nhà chính là nơi
									mà bạn luôn vun đắp, gửi gắm tình cảm cũng như sự kì vọng trong đó. Chúng tôi- đội
									ngũ dày dặn kinh nghiệm đã không ngừng sáng tạo, tìm ra được các giá trị đẳng cấp
									nhất, chất lượng nhất trong mỗi sản phẩm tạo ra. Với bảng báo giá tham khảo dưới
									đây, hy vọng bạn có cái nhìn tổng quan, sự lựa chọn đúng đắn và kế hoạch thực hiện
									hóa không sống ước mơ của mình.</p>

								<p>Để có báo giá chi tiết và cụ thể cho công trình của mình, Qúy khách vui lòng liên hệ
									trực tiếp tới RoyalHome: 0966655500&nbsp;</p>
							</div>
							<div class="link"><a href="/lien-he.html">Đăng ký tư vấn</a></div>
						</div>
						<div class="cats_content">
							<div class="menu_cat_furn_1 menu_cat ">
								<h2 class="title_cat_funr active" id="title_funr_2">
									Báo giá thiết kế kiến trúc </h2>
							</div>
							<div class="fields">
								<label for="kind">Thể loại</label><br>
								<select name="kind_2" id="kind_2" class="kind">
									<?php $options = explode(PHP_EOL,$option_values['kind_2']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_kind_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_2">Phong cách thiết kế kiến trúc</label><br>
								<select name="stype_2" id="stype_2" class="stype">
									<?php $options = explode(PHP_EOL,$option_values['stype_2']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>	
								</select>
							</div>
							<div class="fields">
								<label for="quality_2">Diện tích (m2)</label><br>
								<input type="number" name="quality" class="quality" id="quality_2">
							</div>
							<div class="fields">
								<label for="total_2">Thành tiền (VNĐ)</label><br>
								<input type="text" name="total" class="total" id="total_2" readonly="">

							</div>
							<input type="hidden" name="vat" class="vat" id="vat" value="1">
						</div>

					</form>
				</div>


			</div>


		</div>


	</div>
</div>
<?php do_action( 'flatsome_after_page' ); ?>

<?php get_footer(); ?>

<script>
jQuery(document).ready(function($){
	// chỉnh thể loại
$('.kind').change(function(){
	var vat = $("#vat").val();
	var va = $(this).val();
	var id = $(this).attr('id');
	var id_stype =id.replace('kind_','stype_');
	var stype = $('#'+id_stype).val();
	var id_quality= id.replace('kind_','quality_');
	var quality = $('#'+id_quality).val();
	var total = va*stype*quality*vat;
	var id_total = id.replace('kind_','total_');
	$('#'+id_total).val(formatCurrency(total) +' đ');


})
// chỉnh phong cách

$('.stype').change(function(){
	var vat = $("#vat").val();
	var stype = $(this).val();
	var id = $(this).attr('id');
	var id_va =id.replace('stype_','kind_');
	var va = $('#'+id_va).val();
	var id_quality= id.replace('stype_','quality_');
	var quality = $('#'+id_quality).val();
	var total = va*stype*quality*vat;
	var id_total = id.replace('stype_','total_');
	$('#'+id_total).val(formatCurrency(total) +' đ');

})

// chỉnh số lượng
$('.quality').change(function(){
	var vat = $("#vat").val();
	var quality = $(this).val();
	var id = $(this).attr('id');
	var id_va =id.replace('quality_','kind_');
	var va = $('#'+id_va).val();
	var id_stype =id.replace('quality_','stype_');
	var stype = $('#'+id_stype).val();
	var total = va*stype*quality*vat;
	var id_total = id.replace('quality_','total_');
	$('#'+id_total).val(formatCurrency(total) +' đ');

})

$('.kind2').change(function(){
	var vat = $('#vat').val();
	var id = $(this).val();
	var va = $('.i_kind_'+id).attr('data-price');
	var da = $('.i_kind_'+id).attr('vd');
	var date =da*40;
	var t1 = parseInt(va) * parseInt($('.stt_1').val()) * parseInt($('.stt_2').val());
	var t2= 0;
	for (i =3; i < 9; i++) {
	t2 +=  parseInt($('.stt_'+i).val());
	}
	var total = (t1 + t2) * $('.quality2').val() ;
	//alert(total);
	$('.total').val(formatCurrency(total) +' đ');
	$('.time').val(date+' ngày');

})

$('.stype2').change(function(){
	var vat = $('#vat').val();
	var id = $('.kind2').val();
	var va = $('.i_kind_'+id).attr('data-price');
	var da = $('.i_kind_'+id).attr('vd');
	var date =da*40;
	var t1 = parseInt(va) * parseInt($('.stt_1').val()) * parseInt($('.stt_2').val());
	var t2= 0;
	for (i =3; i < 9; i++) {
	t2 +=  parseInt($('.stt_'+i).val());
	}
	var total = (t1 + t2) * $('.quality2').val() ;
	//alert(total);
	$('.total').val(formatCurrency(total) +' đ');
	$('.time').val(date+' ngày');

})

$('.quality2').change(function(){
	var vat = $('#vat').val();
	var id = $('.kind2').val();
	var va = $('.i_kind_'+id).attr('data-price');
	var da = $('.i_kind_'+id).attr('vd');
	var date =da*40;
	var t1 = parseInt(va) * parseInt($('.stt_1').val()) * parseInt($('.stt_2').val());
	var t2= 0;
	for (i =3; i < 9; i++) {
	t2 +=  parseInt($('.stt_'+i).val());
	}
	var total = (t1 + t2) * $(this).val() ;
	//alert(total);
	$('.total').val(formatCurrency(total) +' đ');
	$('.time').val(date+' ngày');

})
});
function formatCurrency(num) {

num = num.toString().replace(/\$|\,/g,'');

if(isNaN(num))

	num = "0";

sign = (num == (num = Math.abs(num)));

num = Math.floor(num*100+0.50000000001);

cents = num%100;

num = Math.floor(num/100).toString();

if(cents<10)

	cents = "0" + cents;

for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)

	num = num.substring(0,num.length-(4*i+3))+'.'+

num.substring(num.length-(4*i+3));

return (((sign)?'':'-')  + num );

}
</script>