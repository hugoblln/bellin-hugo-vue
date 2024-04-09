<script setup>
import { ref, computed } from 'vue'
import MonsterRow from '@/components/MonsterRow.vue'
import { useRouter, useRoute, routerKey } from 'vue-router';

const monsters = ref([])
const router = useRouter()


const monstersPerPage = 10


const totalPages = computed(() => Math.ceil(monsters.value.length / monstersPerPage))


const currentPage = computed(() => parseInt(useRoute().query.page) || 1)


const getMonstersForPage = (pageNumber) => {
    const startIndex = (pageNumber - 1) * monstersPerPage
    return monsters.value.slice(startIndex, startIndex + monstersPerPage)
}


const currentMonsters = computed(() => getMonstersForPage(currentPage.value))


const getAllMonster = async () => {
    const response = await fetch(`https://metallo.ew.r.appspot.com/monsters?limit=40`);
    monsters.value = await response.json();
    console.log(monsters.value);
}
getAllMonster();


const openMonster = (mId) => {
    const routeParams = {
        name: 'Monsterviews',
        params: {
            monsterId: mId
        }
    }
    router.push(routeParams)
}
</script>

<template>
    <!-- Blog Start -->
    <div class="container py-5">
        <div class="row">
            <!-- Monster list Start -->
            <div class="col">
                <div class="mb-5">
                    <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Every Monsters</h3>
                    <MonsterRow v-for="monster in currentMonsters" :key="monster._id" :id="monster._id"
                        :name="monster.name" :image="monster.image" @click="openMonster(monster._id)">
                    </MonsterRow>
                </div>
            </div>
            <!-- Monster list End -->
        </div>
        <!-- Pagination -->
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                    <router-link class="page-link"
                        :to="{ query: { ...$route.query, page: currentPage - 1 } }">&laquo;</router-link>
                </li>
                <li v-for="pageNumber in totalPages" :key="pageNumber" class="page-item"
                    :class="{ active: pageNumber === currentPage }">
                    <router-link class="page-link" :to="{ query: { ...$route.query, page: pageNumber } }">{{ pageNumber
                        }}</router-link>
                </li>
                <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
                    <router-link class="page-link"
                        :to="{ query: { ...$route.query, page: currentPage + 1 } }">&raquo;</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
 .pagination {
    display: flex;
    justify-content: center;
}

.pagination li {
    cursor: pointer;
}

</style>
