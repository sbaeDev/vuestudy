<template>
	<div>
		<h1>Hello{{ title }}</h1>
		<input type="text" v-model="title" />
		<label><input type="checkbox" name="" id="" v-model="chkbox" /></label>
		<br />
		<input type="text" name="" id="" v-model="textvalue" />
		<button type="button" :disabled="textvalue == ''">click</button>
		<br />

		<div
			class="container"
			v-bind:class="{ active: isActive, 'text-red': hasError }"
		>
			Class Binding
		</div>
		<br />
		<select v-model="selectedValue" @change="changeSelect">
			<option value="서울">서울</option>
			<option value="부산">부산</option>
			<option value="제주">제주</option>
		</select>
		<br />

		<div>
			<table>
				<thead>
					<tr>
						<th>제품명</th>
						<th>가격</th>
						<th>카테고리</th>
						<th>배송료</th>
					</tr>
				</thead>
				<tbody>
					<tr :key="i" v-for="(product, i) in productList">
						<td>{{ product.product_name }}</td>
						<td>{{ product.price }}</td>
						<td>{{ product.category }}</td>
						<td>{{ product.delivery_price }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<NestedComponentVue />
	</div>
</template>

<script>
import NestedComponentVue from './NestedComponent.vue';

export default {
	data() {
		return {
			title: 'world',
			chkbox: true,
			textvalue: '',

			isActive: true,
			hasError: false,

			selectedValue: '',

			productList: [],
		};
	},
	created() {
		this.getList();
	},
	methods: {
		changeSelect() {
			alert(this.selectedValue);
		},
		async getList() {
			this.productList = await this.$api(
				'https://4908c141-5a7b-4977-a01f-0ac41ba7afb4.mock.pstmn.io/list',
				'get',
			);
		},
	},
	components: {
		NestedComponentVue,
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	height: 200px;
}

.active {
	background-color: yellow;
	font-weight: bold;
}

.text-red {
	color: red;
}

table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
</style>
