<?php
/*
Template name: Page - Full Width
*/
get_header(); 
$option_values = get_option( 'fvn_config' );

$id_number = 1;
?>

<?php do_action( 'flatsome_before_page' ); ?>
<div class="main_wrapper container  ">
	<div class="main-area-full">

		<div class="furnitures_home">
			<div class="menu_cat_furn menu_cat_furn_2 cls">
				<div class="form_note cats_content">
					<div>
						<p>Bạn sở hữu một căn hộ, biệt thự, hay là công trình dịch vụ nào mà chưa tìm được chi phí hợp
							lý để thi công?.</p>

						<p>Chi phí quá lớn hoặc quá rẻ làm cho bạn băn khoăn?</p>

						<p>Bạn muốn không gian của mình trở nên hoàn hảo nhưng sợ các ý tưởng đó không đúng theo của
							mình?</p>

						<p>Bạn chưa tìm được một đơn vị thiết kế nội thất trọn gói uy tín??</p>

						<p>Cảm nhận được những trăn trở của khách hàng, chúng tôi với khả năng định hướng thiết kế chuẩn
							mực, hiểu rõ và cập nhật các vật liệu cũng như nguồn gốc xuất xứ chất lượng. Để bạn có cái
							nhìn khách quan nhất, chúng tôi đưa giá báo giá thi công để bạn có thể tham khảo, có cái
							nhìn tổng thể và quyết định đúng đắn nhất khi bắt tay vào xây dựng cho tổ ấm của minh.</p>
					</div>
				</div>

				<form method="post" action="#" name="furnitures" class="form">
					<div class="cats_content">

						<div class="list_fields">
							<div class="fields">
								<label for="kind">Thể loại</label><br>
								<select name="kind_3" id="kind_3" class="kind2">
									<?php $options = explode(PHP_EOL,$option_values['kind_3']);
									foreach($options as $key=>$val){
										$val = explode('|',$val)?>
										<option value="<?php echo $id_number?>" class="i_kind_<?php echo $id_number?>" data-id="<?php echo $id_number?>" data-price="<?php echo $val[1]?>" vd="<?php echo $val[2]?>"><?php echo $val[0]?></option>
									<?php 
								$id_number++;
								}?>
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Phong cách thi công</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_1">
								<?php $option_values['stype_3'] = explode(PHP_EOL,$option_values['stype_3']);
									foreach($option_values['stype_3'] as $key=>$val){
										$val = explode('|',$val)?>
										<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
									<?php 
								$id_number++;
								}?>
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Chủng loại gỗ</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_2">
								<?php $option_values['stype_4'] = explode(PHP_EOL,$option_values['stype_4']);
									foreach($option_values['stype_4'] as $key=>$val){
										$val = explode('|',$val)?>
										<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
									<?php 
								$id_number++;
								}?>									
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Trần thạch cao</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_3">
									<?php $option_values['stype_5'] = explode(PHP_EOL,$option_values['stype_5']);
										foreach($option_values['stype_5'] as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Sơn bả</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_4">
									<?php $options = explode(PHP_EOL,$option_values['stt_4']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Giấy dán tường</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_5">
								<?php $options = explode(PHP_EOL,$option_values['stt_5']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Sàn gỗ</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_6">
								<?php $options = explode(PHP_EOL,$option_values['stt_6']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Rèm cửa</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_7">
								<?php $options = explode(PHP_EOL,$option_values['stt_7']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="stype_3">Thiết bị WC</label><br>
								<select name="stype_3" id="stype_3" class="stype2 stt_8">
									<?php $options = explode(PHP_EOL,$option_values['stt_8']);
										foreach($options as $key=>$val){
											$val = explode('|',$val)?>
											<option value="<?php echo $val[1]?>" class="i_stype_<?php echo $id_number?>" data-id="<?php echo $id_number?>" vt="<?php echo $val[1]?>"><?php echo $val[0]?></option>
										<?php 
									$id_number++;
									}?>			
								</select>
							</div>
							<div class="fields">
								<label for="quality_3">Diện tích (m2)</label><br>
								<input type="number" value="0" name="quality" class="quality2" id="quality_3">
							</div>
							<div class="fields">
								<label for="total_3">Thành tiền (VNĐ)</label><br>
								<input type="text" name="total" class="total" id="total_3" readonly="">

							</div>
							<div class="fields">
								<label for="time_3">Thời gian thi công</label><br>
								<input type="text" name="time" class="time" id="time_3" readonly="">

							</div>
							<input type="hidden" name="vat" class="vat" id="vat" value="1">
						</div>
					</div>
					<div class="clear"></div>
					<div class="link"><a href="/lien-he">Đăng ký tư vấn</a></div>
				</form>
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