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

		<div>
			<select v-model="filter[0]" @change="[]">
				<option value="all">ALL</option>
				<option value="game">게임</option>
				<option value="shop">쇼핑</option>
				<option value="politics">정치</option>
				<option value="date">연애</option>
				<option value="fun">개그</option>
			</select>

			<select v-model="filter[1]" @change="[]">
				<option value="all">ALL</option>
				<option value="AA">AA</option>
				<option value="BB">BB</option>
				<option value="CC">CC</option>
				<option value="DD">DD</option>
				<option value="EE">EE</option>
			</select>
			<button @click="btnfilter()">필터링</button>

			<div id="filteringboard">
				<div v-for="(board, index) in filterboard" :key="board" class="board">
					{{ filterboard[index].id }}
					{{ filterboard[index].title }}
					{{ filterboard[index].class }}
					{{ filterboard[index].writer }}
				</div>
			</div>

			<div id="firstboard">
				<div v-for="(bor, index) in board" :key="bor">
					{{ board[index].id }}
					{{ board[index].title }}
					{{ board[index].class }}
					{{ board[index].writer }}
				</div>
			</div>
		</div>
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

			filter: ['all', 'all'],
			board: [
				{ id: '1', title: '01', class: 'game', writer: 'AA' },
				{ id: '2', title: '02', class: 'game', writer: 'AA' },
				{ id: '3', title: '03', class: 'game', writer: 'AA' },
				{ id: '4', title: '04', class: 'game', writer: 'AA' },
				{ id: '5', title: '05', class: 'game', writer: 'AA' },
				{ id: '6', title: '06', class: 'shop', writer: 'BB' },
				{ id: '7', title: '07', class: 'shop', writer: 'BB' },
				{ id: '8', title: '08', class: 'shop', writer: 'BB' },
				{ id: '9', title: '09', class: 'shop', writer: 'BB' },
				{ id: '10', title: '10', class: 'politics', writer: 'CC' },
				{ id: '11', title: '11', class: 'politics', writer: 'CC' },
				{ id: '12', title: '12', class: 'politics', writer: 'CC' },
				{ id: '13', title: '13', class: 'politics', writer: 'CC' },
				{ id: '14', title: '14', class: 'date', writer: 'DD' },
				{ id: '15', title: '15', class: 'date', writer: 'DD' },
				{ id: '16', title: '16', class: 'date', writer: 'DD' },
				{ id: '17', title: '17', class: 'date', writer: 'DD' },
				{ id: '18', title: '18', class: 'fun', writer: 'EE' },
				{ id: '19', title: '19', class: 'fun', writer: 'EE' },
				{ id: '20', title: '20', class: 'fun', writer: 'EE' },
				{ id: '21', title: '21', class: 'fun', writer: 'EE' },
				{ id: '22', title: '22', class: 'fun', writer: 'EE' },
				{ id: '23', title: '23', class: 'game', writer: 'BB' },
				{ id: '24', title: '24', class: 'game', writer: 'CC' },
				{ id: '25', title: '25', class: 'game', writer: 'DD' },
				{ id: '26', title: '26', class: 'game', writer: 'EE' },
				{ id: '27', title: '27', class: 'shop', writer: 'AA' },
				{ id: '28', title: '28', class: 'shop', writer: 'CC' },
				{ id: '29', title: '29', class: 'shop', writer: 'DD' },
				{ id: '30', title: '30', class: 'shop', writer: 'EE' },
				{ id: '31', title: '31', class: 'date', writer: 'AA' },
				{ id: '32', title: '32', class: 'date', writer: 'BB' },
				{ id: '33', title: '33', class: 'date', writer: 'CC' },
				{ id: '34', title: '34', class: 'date', writer: 'EE' },
				{ id: '35', title: '35', class: 'fun', writer: 'AA' },
				{ id: '36', title: '36', class: 'fun', writer: 'BB' },
				{ id: '37', title: '37', class: 'fun', writer: 'CC' },
				{ id: '38', title: '38', class: 'fun', writer: 'DD' },
				{ id: '39', title: '39', class: 'politics', writer: 'AA' },
				{ id: '40', title: '40', class: 'politics', writer: 'BB' },
				{ id: '41', title: '41', class: 'politics', writer: 'DD' },
				{ id: '42', title: '42', class: 'politics', writer: 'EE' },
			],
			filterboard: [],
		};
	},
	created() {
		this.getList();
	},
	methods: {
		changeSelect() {
			alert(this.selectedValue);
		},

		changeboard(flag) {
			const board = document.getElementById('firstboard');
			const filterboard = document.getElementById('filteringboard');
			if (flag) {
				filterboard.style.display = 'block';
				board.style.display = 'none';
			} else {
				filterboard.style.display = 'none';
				board.style.display = 'block';
			}
		},

		btnfilter() {
			this.filterboard = this.board;
			let cnt = 0;
			for (let i in this.filter) {
				if (this.filter[i] == 'all') cnt++;
			}
			if (cnt === this.filter.length) {
				this.changeboard(true);
			} else {
				for (let i in this.filter) {
					if (this.filter[i] === 'all') continue;
					else {
						this.filtering(i);
					}
				}
				this.changeboard(true);
			}
		},

		filtering(i) {
			let filter;
			switch (i) {
				case '0':
					// eslint-disable-next-line no-case-declarations
					filter = this.filterboard.filter(
						boardfilter => boardfilter.class == this.filter[0],
					);
					this.filterboard = filter;
					break;
				case '1':
					filter = this.filterboard.filter(
						boardfilter => boardfilter.writer == this.filter[1],
					);
					this.filterboard = filter;
					break;
			}
		},

		// 전통적방식
		filtering_old() {
			let filter1 = this.boardfilter[0];
			let filter2 = this.boardfilter[1];
			this.temparr = [];
			for (let i in this.boarddata) {
				if (
					this.boarddata[i].class === filter1 &&
					this.boarddata[i].writer === filter2
				) {
					this.temparr.push(this.boarddata[i]);
				}
			}
		},

		// filter 기능 이용
		temptemp() {
			const filter = this.boarddata.filter(
				boardfil =>
					boardfil.class == this.boardfilter[0] &&
					boardfil.writer == this.boardfilter[1],
			);
			console.log(filter);
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
.board {
	border-inline: 1px solid;
}
</style>
